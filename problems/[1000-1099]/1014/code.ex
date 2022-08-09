defmodule Car do
  def calculate_average_consumption(distance, spent_fuel) do
    distance / spent_fuel
  end
end

defmodule Util do
  def parse_string_as_float(value) do
    value |> String.trim() |> Float.parse() |> elem(0)
  end

  def parse_string_as_integer(value) do
    value |> String.trim() |> String.to_integer()
  end

  def parse_mantissa(value, mantissa) do
    :erlang.float_to_binary(value, decimals: mantissa)
  end
end

total_distance = IO.gets("") |> Util.parse_string_as_integer()
spent_fuel_total = IO.gets("") |> Util.parse_string_as_float()

average_consumption = Car.calculate_average_consumption(total_distance, spent_fuel_total) |> Util.parse_mantissa(3)

IO.puts("#{average_consumption} km/l")
