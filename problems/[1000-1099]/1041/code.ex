defmodule Point do
  def get_quadrant(x, y) do
    cond do
      x > 0 && y > 0 -> "Q1"
      x < 0 && y > 0 -> "Q2"
      x < 0 && y < 0 -> "Q3"
      x > 0 && y < 0 -> "Q4"
      true -> nil
    end
  end

  def get_axis(x, y) do
    cond do
      y == 0 -> "Eixo X"
      x == 0 -> "Eixo Y"
      true -> nil
    end
  end

  def is_at_the_origin(x, y) do
    x == 0 && y == 0
  end
end

defmodule Util do
  def parse_string_as_float(value) do
    value |> String.trim() |> Float.parse() |> elem(0)
  end
end

[x, y] = IO.gets("") |> String.split(" ") |> Enum.map(fn x -> Util.parse_string_as_float(x) end)

is_at_the_origin = Point.is_at_the_origin(x, y)
axis = Point.get_axis(x, y)
quadrant = Point.get_quadrant(x, y)

cond do
  is_at_the_origin -> IO.puts("Origem")
  axis -> IO.puts("#{axis}")
  quadrant -> IO.puts("#{quadrant}")
end
