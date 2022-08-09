defmodule Exam do
  def calculateAverage(n1, n2, n3, n4) do
    (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10
  end

  def calculateFinalAverage(n1, n2) do
    (n1 + n2) / 2
  end

  def is_in_progress(score) do
    score >= 5 && score <= 6.9
  end

  def get_status(score, in_exam \\ false) do
    if(in_exam) do
      cond do
        score >= 5 -> "Aluno aprovado."
        score < 4.9 -> "Aluno reprovado."
      end
    else
      cond do
        score >= 7.0 -> "Aluno aprovado."
        score < 5.0 -> "Aluno reprovado."
        true -> "Aluno em exame."
      end
    end
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

[n1, n2, n3, n4] = IO.gets("") |> String.split(" ") |> Enum.map(fn x -> Util.parse_string_as_float(x) end)

average = Exam.calculateAverage(n1, n2, n3, n4)
status = Exam.get_status(average)
in_progress = Exam.is_in_progress(average)

IO.puts("Media: #{Util.parse_mantissa(average, 1)}")
IO.puts("#{status}")

if(in_progress) do
  n5 = IO.gets("") |> Util.parse_string_as_float()
  final_average = Exam.calculateFinalAverage(average, n5)
  new_status = Exam.get_status(final_average, in_progress)

  IO.puts("Nota do exame: #{Util.parse_mantissa(n5, 1)}")
  IO.puts(new_status)
  IO.puts("Media final: #{Util.parse_mantissa(final_average, 1)}")
end
