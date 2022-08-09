defmodule Bhaskara do
  def calculateRoots(a, b, c) do
    delta = calculateDelta(a, b, c)

    if(Util.is_negative(delta) || a == 0) do
      raise "Impossivel calcular"
    end

    r1 = (-b + :math.sqrt(delta)) / (2 * a)
    r2 = (-b - :math.sqrt(delta)) / (2 * a)

    [r1, r2]
  end

  def calculateDelta(a, b, c) do
    :math.pow(b, 2) - 4 * a * c
  end
end

defmodule Util do
  def parse_string_as_float(value) do
    value |> String.trim() |> Float.parse() |> elem(0)
  end

  def is_negative(value) do
    value < 0
  end

  def parse_mantisse(value, mantisse) do
    :erlang.float_to_binary(value, decimals: mantisse)
  end
end

try do
  [a, b, c] = IO.gets("") |> String.split(" ") |> Enum.map(fn x -> Util.parse_string_as_float(x) end)
  [r1, r2] = Bhaskara.calculateRoots(a, b, c) |> Enum.map(fn x -> Util.parse_mantisse(x, 5) end)

  IO.puts("R1 = #{r1}")
  IO.puts("R2 = #{r2}")
rescue
  e in RuntimeError -> IO.puts(e.message)
end
