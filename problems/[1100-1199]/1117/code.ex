defmodule Util do
  def parse_string_as_float(value) do
    value |> String.trim() |> Float.parse() |> elem(0)
  end

  def parse_mantissa(value, mantissa) do
    :erlang.float_to_binary(value, decimals: mantissa)
  end
end

defmodule Program do
  def init() do
    valid_scores = get_valid_scores()

    average_score = calculate_average_score(valid_scores) |> Util.parse_mantissa(2)

    IO.puts("media = #{average_score}")
  end

  def get_valid_scores() do
    get_valid_scores([])
  end

  def get_valid_scores(valid_scores) when length(valid_scores) == 2 do
    valid_scores
  end

  def get_valid_scores(valid_scores) do
    score =
      IO.read(:stdio, :line)
      |> Util.parse_string_as_float()

    if(score >= 0 && score <= 10) do
      get_valid_scores([score | valid_scores])
    else
      IO.puts("nota invalida")
      get_valid_scores(valid_scores)
    end
  end

  def calculate_average_score(scores) do
    Enum.sum(scores) / Enum.count(scores)
  end
end

Program.init()
