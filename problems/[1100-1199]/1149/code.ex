defmodule Program do
  def init() do
    [a | rest] =
      IO.read(:stdio, :line)
      |> String.split(" ")
      |> Enum.map(fn x ->
        x |> String.trim() |> String.to_integer()
      end)

    get_sum(a, rest) |> IO.puts()
  end

  def get_sum(a, rest) do
    n = hd(rest)

    if n <= 0 do
      get_sum(a, tl(rest))
    else
      get_sum(a, n - 1, 0)
    end
  end

  def get_sum(_, n, accumulator) when n < 0, do: accumulator

  def get_sum(a, n, accumulator) do
    sum = accumulator + a + n
    get_sum(a, n - 1, sum)
  end
end

Program.init()
