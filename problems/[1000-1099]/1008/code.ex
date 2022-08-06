employee_number = IO.gets("") |> String.trim() |> String.to_integer()
worked_hours_amount = IO.gets("") |> String.trim() |> String.to_integer()
amount_receives_per_worked_hour = IO.gets("") |> String.trim() |> String.to_float()

employee_salary = (worked_hours_amount * amount_receives_per_worked_hour) |> :erlang.float_to_binary(decimals: 2)

IO.puts("NUMBER = #{employee_number}\nSALARY = U$ #{employee_salary}")
