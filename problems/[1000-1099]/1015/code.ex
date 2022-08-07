defmodule Point do
  def calculate_distance(point1, point2) do
    (:math.pow(point2.x - point1.x, 2) + :math.pow(point2.y - point1.y, 2)) |> :math.sqrt()
  end

  def make(values) do
    [[:x, :y], values] |> Enum.zip() |> Map.new()
  end
end

defmodule Util do
  def parse_mantisse(value, mantisse) do
    :erlang.float_to_binary(value, decimals: mantisse)
  end

  def parse_string_as_float(value) do
    value |> String.trim() |> Float.parse() |> elem(0)
  end
end

point1 =
  IO.gets("")
  |> String.split(" ")
  |> Enum.map(fn x -> Util.parse_string_as_float(x) end)
  |> Point.make()

point2 =
  IO.gets("")
  |> String.split(" ")
  |> Enum.map(fn x -> Util.parse_string_as_float(x) end)
  |> Point.make()

distance = Point.calculate_distance(point1, point2) |> Util.parse_mantisse(4)

IO.puts("#{distance}")
