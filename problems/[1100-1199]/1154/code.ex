defmodule Program do
  def init() do
    ages =
      IO.read(:stdio, :all)
      |> String.trim()
      |> String.split("\n")
      |> Enum.map(fn x ->
        x |> String.trim() |> String.to_integer()
      end)
      |> Enum.filter(fn x -> x > 0 end)

    average_age = calculate_average_age(ages) |> parse_mantissa(2)

    IO.puts(average_age)
  end

  def calculate_average_age(ages) do
    Enum.sum(ages) |> Kernel./(Enum.count(ages))
  end

  def parse_mantissa(value, mantissa) do
    :erlang.float_to_binary(value, decimals: mantissa)
  end
end

Program.init()
