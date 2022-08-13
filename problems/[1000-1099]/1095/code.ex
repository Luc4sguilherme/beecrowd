defmodule Program do
  def sequence() do
    sequence(1, 60)
  end

  def sequence(i, j) do
    IO.puts("I=#{i} J=#{j}")

    if j > 0 do
      sequence(i + 3, j - 5)
    end
  end
end

Program.sequence()
