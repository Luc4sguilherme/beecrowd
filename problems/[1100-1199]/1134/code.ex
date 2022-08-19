defmodule Util do
  def parse_string_as_integer(value) do
    value |> String.trim() |> String.to_integer()
  end
end

defmodule Program do
  def init() do
    values = get_values()

    %{:alcohol => alcohol, :gasoline => gasoline, :diesel => diesel} =
      get_amount_of_customers_who_fueled_each_fuel_type(values)

    IO.puts("MUITO OBRIGADO")
    IO.puts("Alcool: #{alcohol}")
    IO.puts("Gasolina: #{gasoline}")
    IO.puts("Diesel: #{diesel}")
  end

  def get_values() do
    get_values([])
  end

  def get_values(values) do
    value = IO.read(:stdio, :line) |> Util.parse_string_as_integer()

    cond do
      value == 1 or value == 2 or value == 3 -> get_values([value | values])
      value == 4 -> values
      true -> get_values(values)
    end
  end

  def get_amount_of_customers_who_fueled_each_fuel_type(values) do
    Enum.reduce(values, %{:alcohol => 0, :gasoline => 0, :diesel => 0}, fn value, accumulator ->
      cond do
        value == 1 -> Map.update!(accumulator, :alcohol, fn x -> x + 1 end)
        value == 2 -> Map.update!(accumulator, :gasoline, fn x -> x + 1 end)
        value == 3 -> Map.update!(accumulator, :diesel, fn x -> x + 1 end)
        true -> accumulator
      end
    end)
  end
end

Program.init()
