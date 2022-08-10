require Integer

for n <- 1..100 do
  if Integer.is_even(n) do
    IO.puts("#{n}")
  end
end
