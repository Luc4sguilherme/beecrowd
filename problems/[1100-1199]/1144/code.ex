defmodule Program do
  def sequence() do
    value = IO.gets("") |> String.trim() |> String.to_integer()

    sequence(value, 1, 0, 1, 1)
  end

  def sequence(value, i, j, k, l) do
    cond do
      l <= 2 ->
        result = i * k

        if l == 1 do
          line = "#{i} #{k} #{result}\n"
          IO.write(:stdio, line)
          sequence(value, i, j, k + 1, l + 1)
        else
          line = "#{i} #{k} #{result - j}\n"
          IO.write(:stdio, line)
          sequence(value, i, j, k + 2 * i, l + 1)
        end

      i < value ->
        sequence(value, i + 1, j + 1, k, 1)

      true ->
        nil
    end
  end
end

Program.sequence()
