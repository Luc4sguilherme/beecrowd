radius = IO.gets("") |> String.trim |> String.to_float

pi = 3.14159

area = pi * :math.pow(radius, 2) |> :erlang.float_to_binary([decimals: 4])

IO.puts "A=#{area}"
