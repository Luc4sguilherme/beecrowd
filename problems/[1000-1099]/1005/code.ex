a = IO.gets("") |> String.trim() |> String.to_float()
b = IO.gets("") |> String.trim() |> String.to_float()

media = (a * 3.5 + b * 7.5) |> Kernel./(11) |> :erlang.float_to_binary(decimals: 5)

IO.puts("MEDIA = #{media}")
