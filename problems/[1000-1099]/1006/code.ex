a = IO.gets("") |> String.trim() |> String.to_float()
b = IO.gets("") |> String.trim() |> String.to_float()
c = IO.gets("") |> String.trim() |> String.to_float()

media = (a * 2 + b * 3 + c * 5) |> Kernel./(10) |> Float.round(1)

IO.puts("MEDIA = #{media}")
