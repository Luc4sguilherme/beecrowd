defmodule Program do
  def sequence() do
    value = IO.gets("") |> String.trim() |> String.to_integer()

    sequence(value, [], 0, 1, 1, 1)
  end

  def sequence(value, acc, i, j, k, l) do
    cond do
      k <= 3 ->
        sequence(value, List.insert_at(acc, -1, trunc(l)), i, j, k + 1, :math.pow(j, k + 1))

      i < value ->
        Enum.join(acc, " ") |> IO.puts()
        sequence(value, [], i + 1, j + 1, 1, j + 1)

      true ->
        nil
    end
  end
end

Program.sequence()
