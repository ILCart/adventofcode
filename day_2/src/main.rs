use std::fs;
fn main() {
    let input =
        fs::read_to_string("C:/Users/150073110/Documents/GitHub/adventofcode/day_2/src/input.txt")
            .expect("Could not locate file");
    let input2 =
        fs::read_to_string("C:/Users/150073110/Documents/GitHub/adventofcode/day_2/src/input2.txt")
            .expect("Could not locate file");
    println!("Part 1: {}", pt1(&input));
    println!("Part 2: {}", pt2(&input2));
}

fn pt1(input:&str) -> i32{
    let rgb_max = [12,13,14]
    let mut sum:i32 = 0;
    sum
}
fn pt2(input:&str) -> i32{
    let mut sum:i32 = 0;
    sum
}