use std::io;

fn handle_input() -> i32 {
    let mut input = String::new();

    io::stdin().read_line(&mut input).unwrap();
    input.trim().parse().unwrap()
}

fn main() {
    let mut input = vec![];

    for _ in 0..2 {
        input.push(handle_input())
    }

    let sum = input.into_iter().sum::<i32>();

    println!("SOMA = {}", sum);
}
