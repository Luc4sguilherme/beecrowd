defmodule Program do
  def sequence() do
    sequence(0, 1)
  end

  def sequence(i, j) do
    IO.puts("I=#{Util.format(i, 1)} J=#{Util.format(j, 1)}")

    cond do
      j < 3 + i -> sequence(i, j + 1)
      i < 1.8 -> sequence(i + 0.2, i + 1.2)
      true -> nil
    end
  end
end

defmodule Util do
  def format(value, mantissa) do
    cond do
      is_float(value) ->
        float = Float.round(value, 2)
        truncated = trunc(float)

        if truncated == float do
          truncated
        else
          float
        end

      is_integer(value) ->
        value
    end
  end
end

Program.sequence()
