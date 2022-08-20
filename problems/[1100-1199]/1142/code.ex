defmodule Program do
  def sequence() do
    value = IO.gets("") |> String.trim() |> String.to_integer()

    sequence(value, 1, 1, 1)
  end

  def sequence(value, i, j, k) do
    cond do
      k < j + 3 ->
        IO.write(:stdio, "#{k} ")
        sequence(value, i, j, k + 1)

      i < value ->
        IO.write(:stdio, "PUM\n")
        sequence(value, i + 1, j + 4, j + 4)

      i == value ->
        IO.write(:stdio, "PUM\n")

      true ->
        nil
    end
  end
end

Program.sequence()
