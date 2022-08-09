defmodule Money do
  @banknotes [100, 50, 20, 10, 5, 2]
  @coins [100, 50, 25, 10, 5, 1]

  def get_amount_of_banknotes(amount) do
    do_get_amount_of_banknotes(trunc(amount), @banknotes, %{})
  end

  defp do_get_amount_of_banknotes(_, banknotes, accumulator) when length(banknotes) == 0,
    do: accumulator

  defp do_get_amount_of_banknotes(amount, [banknote | smaller_banknotes], accumulator) do
    banknote_amount = :math.floor(amount / banknote) |> trunc()
    remaining_amount = rem(amount, banknote)

    Map.merge(
      do_get_amount_of_banknotes(remaining_amount, smaller_banknotes, %{
        banknote => banknote_amount
      }),
      accumulator
    )
  end

  def get_amount_of_coins(amount) do
    Enum.reduce(@banknotes, amount, fn x, accumulator ->
      accumulator - div(trunc(accumulator), x) * x
    end)
    |> Kernel.*(100)
    |> trunc()
    |> do_get_amount_of_coins(@coins, %{})
  end

  defp do_get_amount_of_coins(_, coins, accumulator) when length(coins) == 0,
    do: accumulator

  defp do_get_amount_of_coins(amount, [coin | smaller_coins], accumulator) do
    coin_amount = :math.floor(amount / coin) |> trunc()
    remaining_amount = rem(amount, coin)

    Map.merge(
      do_get_amount_of_coins(remaining_amount, smaller_coins, %{
        Util.parse_mantissa(coin / 100, 2) => coin_amount
      }),
      accumulator
    )
  end
end

defmodule Util do
  def parse_mantissa(value, mantissa) do
    :erlang.float_to_binary(value, decimals: mantissa)
  end

  def parse_string_as_float(value) do
    value |> String.trim() |> Float.parse() |> elem(0)
  end
end

balance = IO.gets("") |> Util.parse_string_as_float()

IO.puts("NOTAS:")

Money.get_amount_of_banknotes(balance)
|> Enum.reverse()
|> Enum.each(fn {banknote, amount} -> IO.puts("#{amount} nota(s) de R$ #{banknote}.00") end)

IO.puts("MOEDAS:")

Money.get_amount_of_coins(balance)
|> Enum.reverse()
|> Enum.each(fn {coin, amount} -> IO.puts("#{amount} moeda(s) de R$ #{coin}") end)
