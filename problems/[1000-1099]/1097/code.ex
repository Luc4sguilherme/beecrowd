defmodule Program do
  def sequence() do
    sequence(1, 7, 1)
  end

  def sequence(i, j, k) do
    IO.puts("I=#{i} J=#{j}")

    cond do
      k < 3 -> sequence(i, j - 1, k + 1)
      i < 9 -> sequence(i + 2, j + 4, k - 2)
      true -> nil
    end
  end
end

Program.sequence()
