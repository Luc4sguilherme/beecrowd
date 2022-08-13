defmodule Program do
  def sequence() do
    sequence(1, 7)
  end

  def sequence(i, j) do
    IO.puts("I=#{i} J=#{j}")

    cond do
      j > 5 -> sequence(i, j - 1)
      i < 9 -> sequence(i + 2, j + 2)
      true -> nil
    end
  end
end

Program.sequence()
