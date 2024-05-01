use std::fs;

fn main() {
    let input =
        fs::read_to_string("C:/Users/150073110/Documents/GitHub/adventofcode/day_1/src/input.txt")
            .expect("Could not locate file");
    let input2 =
        fs::read_to_string("C:/Users/150073110/Documents/GitHub/adventofcode/day_1/src/input2.txt")
            .expect("Could not locate file");
    println!("Part 1: {}", pt1(&input));
    println!("Part 2: {}", pt2(&input2));
}

fn pt1(input: &String) -> i32 {
    let mut sum: i32 = 0;
    for line in input.lines() {
        let clean_line = line
            .trim()
            .chars()
            .filter(|c| !c.is_alphabetic())
            .collect::<String>();
        let first = clean_line.chars().next().unwrap();
        let last = clean_line.chars().next_back().unwrap_or(first);
        // println!("{0} | {1}{2}",line,first,last);
        let mut term = first.to_string();
        term.push(last);
        sum += term.parse::<i32>().unwrap();
    }
    sum
}

fn pt2(input: &String) -> i32 {
    let num_to_let: [&str; 10] = [
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    ];
    let mut sum: i32 = 0;
    for line in input.lines() {
        let mut new_line = line.to_string();
        for (num, letter) in num_to_let.iter().enumerate() {
            for (i,v) in line.match_indices(letter){
                new_line.insert(v.len()+i, num.to_string().chars().next().unwrap());
            }
        }
        new_line = new_line.chars().filter(|c| c.is_numeric()).collect::<String>();
        let first = new_line.chars().next().unwrap();
        let last = new_line.chars().next_back().unwrap_or(first);
        new_line = first.to_string();
        new_line.push(last);
        sum += new_line.parse::<i32>().unwrap();
    }
    sum
}
