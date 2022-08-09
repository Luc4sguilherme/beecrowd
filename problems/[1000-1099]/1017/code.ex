defmodule Car do
  def calculate_spent_fuel(spent_time, average_speed, fuel_consumption) do
    spent_time * average_speed / fuel_consumption
  end
end

defmodule Util do
  def parse_mantissa(value, mantissa) do
    :erlang.float_to_binary(value, decimals: mantissa)
  end

  def parse_string_as_integer(value) do
    value |> String.trim() |> String.to_integer()
  end
end

spent_time = IO.gets("") |> Util.parse_string_as_integer()
average_speed = IO.gets("") |> Util.parse_string_as_integer()

car_fuel_consumption = 12

liters_of_fuel =
  Car.calculate_spent_fuel(spent_time, average_speed, car_fuel_consumption)
  |> Util.parse_mantissa(3)

IO.puts("#{liters_of_fuel}")
