defmodule Triangle do
  def is_triangle(a, b, c), do: !(a >= b + c)

  def is_right_triangle(a, b, c) do
    :math.pow(a, 2) == :math.pow(b, 2) + :math.pow(c, 2)
  end

  def is_obtuse_triangle(a, b, c) do
    :math.pow(a, 2) > :math.pow(b, 2) + :math.pow(c, 2)
  end

  def is_acute_triangle(a, b, c) do
    :math.pow(a, 2) < :math.pow(b, 2) + :math.pow(c, 2)
  end

  def is_equilateral_triangle(a, b, c) do
    a == b && a == c
  end

  def is_isosceles_triangle(a, b, c) do
    (a == b && a != c) || (a == c && a != b) || (b == c && b != a)
  end
end

defmodule Util do
  def parse_string_as_float(value) do
    value |> String.trim() |> Float.parse() |> elem(0)
  end
end

[a, b, c] =
  IO.gets("")
  |> String.split(" ")
  |> Enum.map(fn x -> Util.parse_string_as_float(x) end)
  |> Enum.sort(:desc)

cond do
  !Triangle.is_triangle(a, b, c) -> IO.puts("NAO FORMA TRIANGULO")
  Triangle.is_right_triangle(a, b, c) -> IO.puts("TRIANGULO RETANGULO")
  Triangle.is_obtuse_triangle(a, b, c) -> IO.puts("TRIANGULO OBTUSANGULO")
  Triangle.is_acute_triangle(a, b, c) -> IO.puts("TRIANGULO ACUTANGULO")
  true -> nil
end

cond do
  Triangle.is_equilateral_triangle(a, b, c) -> IO.puts("TRIANGULO EQUILATERO")
  Triangle.is_isosceles_triangle(a, b, c) -> IO.puts("TRIANGULO ISOSCELES")
  true -> nil
end
