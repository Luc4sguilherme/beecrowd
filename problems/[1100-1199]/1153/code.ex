defmodule Program do
  def init() do
    input = IO.read(:stdio, :line) |> String.trim() |> String.to_integer()

    factorial(input) |> IO.puts()
  end

  def factorial(n) when n <= 1, do: 1

  def factorial(n) do
    n * factorial(n - 1)
  end
end

Program.init()
