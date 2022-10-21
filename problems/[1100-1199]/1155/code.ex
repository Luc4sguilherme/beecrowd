defmodule Program do
  def init() do
    sequence = calculate_sequence() |> parse_mantissa(2)

    IO.puts(sequence)
  end

  def calculate_sequence(value \\ 1) do
    if value <= 100 do
      1 / value + calculate_sequence(value + 1)
    else
      0
    end
  end

  def parse_mantissa(value, mantissa) do
    :erlang.float_to_binary(value, decimals: mantissa)
  end
end

Program.init()
