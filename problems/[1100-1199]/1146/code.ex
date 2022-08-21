defmodule Program do
  def init() do
    last = IO.read(:stdio, :line) |> String.trim() |> String.to_integer()

    if last != 0 do
      get_all_numbers(1..last) |> IO.puts()
      init()
    end
  end

  def get_all_numbers(range) do
    range
    |> Enum.to_list()
    |> Enum.reduce([], fn value, accumulator ->
      List.insert_at(accumulator, -1, value)
    end)
    |> Enum.join(" ")
  end
end

Program.init()
