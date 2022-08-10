defmodule Triangle do
  def calculate_perimeter(a, b, c) do
    a + b + c
  end

  def is_triangle(a, b, c) do
    a + b > c && b + c > a && a + c > b
  end
end

defmodule Trapezium do
  def calculate_area(a, b, c) do
    0.5 * (a + b) * c
  end
end

defmodule Util do
  def parse_string_as_float(value) do
    value |> String.trim() |> Float.parse() |> elem(0)
  end

  def parse_mantissa(value, mantissa) do
    :erlang.float_to_binary(value, decimals: mantissa)
  end
end

[a, b, c] =
  IO.gets("")
  |> String.trim()
  |> String.split(" ")
  |> Enum.map(fn x -> Util.parse_string_as_float(x) end)

is_triangle = Triangle.is_triangle(a, b, c)

if(is_triangle) do
  triangle_perimeter = Triangle.calculate_perimeter(a, b, c) |> Util.parse_mantissa(1)
  IO.puts("Perimetro = #{triangle_perimeter}")
else
  trapezium_area = Trapezium.calculate_area(a, b, c) |> Util.parse_mantissa(1)
  IO.puts("Area = #{trapezium_area}")
end
