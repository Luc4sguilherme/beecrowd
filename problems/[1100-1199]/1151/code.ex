defmodule Program do
  def fibonacci(nth) do
    list = [1, 1, 0]
    fibonacci(list, nth)
  end

  def fibonacci(list, 2) do
    Enum.reverse(list)
  end

  def fibonacci(list, n) do
    fibonacci([hd(list) + hd(tl(list))] ++ list, n - 1)
  end
end

n = IO.gets("") |> String.trim() |> String.to_integer()

Program.fibonacci(n - 1)
|> Enum.join(" ")
|> IO.puts()
