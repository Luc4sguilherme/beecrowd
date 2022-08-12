defmodule Sensor do
  def calculate_accuracy(measures) do
    mean = Enum.sum(measures) / Enum.count(measures)
    number_of_measures = Enum.count(measures)

    summation =
      Enum.reduce(measures, 0, fn measure, accumulator ->
        accumulator + :math.pow(measure - mean, 2)
      end)

    sample_variance = summation / (number_of_measures - 1)
    accuracy = :math.sqrt(sample_variance)

    accuracy
  end
end

defmodule Util do
  def parse_string_as_float(value) do
    value |> String.trim() |> Float.parse() |> elem(0)
  end

  def parse_mantissa(value, mantissa) do
    :erlang.float_to_binary(value, decimals: mantissa)
  end
end

measures =
  IO.read(:stdio, :all)
  |> String.trim()
  |> String.split("\n")
  |> Enum.map(fn value -> String.split(value, " ") end)
  |> Enum.chunk_every(2)
  |> Enum.map(fn [_, measures] ->
    Enum.map(measures, fn measure ->
      Util.parse_string_as_float(measure)
    end)
  end)

measures
|> Enum.each(fn measure ->
  sensor_accuracy = Sensor.calculate_accuracy(measure) |> Util.parse_mantissa(5)
  IO.puts("#{sensor_accuracy}")
end)
