use std::{collections::HashMap, fs};
fn main() {
    let input = fs::read_to_string("./input.txt").expect("Could not locate file");
    println!("Part 1: {}", pt1(&input));
    println!("Part 2: {}", pt2(&input));
}

fn pt1(input: &str) -> i32 {
    let mut sum: i32 = 0;
    for (id, line) in input.lines().enumerate() {
        sum += id as i32 + 1;
        let processed_string: Vec<&str> = line
            .trim()
            .split(":")
            .last()
            .unwrap()
            .split(";")
            .map(|s| s.split(",").collect::<Vec<&str>>())
            .flatten()
            .map(|s| s.trim())
            .collect();
        for str in processed_string {
            let (num, color) = (
                str.split_whitespace()
                    .next()
                    .unwrap()
                    .parse::<i32>()
                    .unwrap(),
                str.split_whitespace().next_back().unwrap(),
            );
            let x: bool = match color {
                "red" => num <= 12,
                "green" => num <= 13,
                "blue" => num <= 14,
                _ => false,
            };
            if x == false {
                sum -= id as i32 + 1;
                break;
            }
        }
    }
    sum
}
fn pt2(input: &str) -> i32 {
    let mut sum: i32 = 0;
    for line in input.lines() {
        let processed_string: Vec<&str> = line
            .trim()
            .split(":")
            .last()
            .unwrap()
            .split(";")
            .map(|s| s.split(",").collect::<Vec<&str>>())
            .flatten()
            .map(|s| s.trim())
            .collect();
        let mut greatest: HashMap<&str, i32> = HashMap::new();
        greatest.insert("red", 0);
        greatest.insert("green", 0);
        greatest.insert("blue", 0);
        for str in processed_string {
            let (num, color) = (
                str.split_whitespace()
                    .next()
                    .unwrap()
                    .parse::<i32>()
                    .unwrap(),
                str.split_whitespace().next_back().unwrap(),
            );
            if greatest.get(color).unwrap() < &num {
                greatest.insert(color, num);
            }
        }
        let x = greatest.values().fold(1, |a, b| a * b);
        sum += x;
    }
    sum
}
