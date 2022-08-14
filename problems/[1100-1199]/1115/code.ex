defmodule Program do
  def init() do
    [x, y] =
      IO.read(:stdio, :line)
      |> String.trim()
      |> String.split(" ")
      |> Enum.map(fn value -> String.to_integer(value) end)

    quadrant = check_quadrant(x, y)

    if quadrant != nil do
      IO.puts("#{quadrant}")
      init()
    end
  end

  def check_quadrant(x, y) do
    cond do
      x > 0 and y > 0 -> "primeiro"
      x < 0 and y > 0 -> "segundo"
      x < 0 and y < 0 -> "terceiro"
      x > 0 and y < 0 -> "quarto"
      true -> nil
    end
  end
end

Program.init()
