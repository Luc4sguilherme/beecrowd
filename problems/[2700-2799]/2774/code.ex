defmodule Sensor do
  def calculate_accuracy(measurements) do
    mean = Enum.sum(measurements) / Enum.count(measurements)
    number_of_measurements = Enum.count(measurements)

    summation =
      Enum.reduce(measurements, 0, fn measurement, accumulator ->
        accumulator + :math.pow(measurement - mean, 2)
      end)

    sample_variance = summation / (number_of_measurements - 1)
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

measurements =
  IO.read(:stdio, :all)
  |> String.trim()
  |> String.split("\n")
  |> Enum.map(fn value -> String.split(value, " ") end)
  |> Enum.chunk_every(2)
  |> Enum.map(fn [_, measurements] ->
    Enum.map(measurements, fn measurement ->
      Util.parse_string_as_float(measurement)
    end)
  end)

measurements
|> Enum.each(fn measurement ->
  sensor_accuracy = Sensor.calculate_accuracy(measurement) |> Util.parse_mantissa(5)
  IO.puts("#{sensor_accuracy}")
end)
