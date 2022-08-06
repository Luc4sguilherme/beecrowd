_employee_first_name = IO.gets("") |> String.trim()
seller_salary = IO.gets("") |> String.trim() |> String.to_float()
total_value_sold = IO.gets("") |> String.trim() |> String.to_float()

total =
  (total_value_sold * 15)
  |> Kernel./(100)
  |> Kernel.+(seller_salary)
  |> :erlang.float_to_binary(decimals: 2)

IO.puts("TOTAL = R$ #{total}")
