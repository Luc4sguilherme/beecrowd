defmodule Program do
  def sequence() do
    [x, y] =
      IO.gets("")
      |> String.trim()
      |> String.split(" ")
      |> Enum.map(fn value ->
        value
        |> String.trim()
        |> String.to_integer()
      end)

    sequence(x, y, [], 1)
  end

  def sequence(x, y, acc, i) do
    if i <= y do
      line = List.insert_at(acc, -1, i)

      if rem(i, x) == 0 do
        Enum.join(line, " ") |> IO.puts()
        sequence(x, y, [], i + 1)
      else
        sequence(x, y, line, i + 1)
      end
    end
  end
end

Program.sequence()
