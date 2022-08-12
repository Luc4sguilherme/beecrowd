require Integer

number_classifier = fn number ->
  even_or_odd =
    cond do
      Integer.is_even(number) -> "EVEN"
      Integer.is_odd(number) -> "ODD"
    end

  positive_or_negative_or_null =
    cond do
      number > 0 -> "POSITIVE"
      number < 0 -> "NEGATIVE"
      number == 0 -> "NULL"
    end

  if(positive_or_negative_or_null == "NULL") do
    "#{positive_or_negative_or_null}"
  else
    "#{even_or_odd} #{positive_or_negative_or_null}"
  end
end

numbers =
  IO.read(:stdio, :all)
  |> String.trim()
  |> String.split("\n")
  |> Enum.drop(1)
  |> Enum.map(fn number -> String.to_integer(number) end)

classified_numbers = Enum.map(numbers, fn number -> number_classifier.(number) end)

Enum.each(classified_numbers, fn classified_number -> IO.puts("#{classified_number}") end)
