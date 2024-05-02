use std::collections::HashMap;
use std::{fs, vec};
fn main() {
    let input = fs::read_to_string("./input.txt").expect("Could not locate file");
    println!("Part 1: {}", pt1(&input));
    println!("Part 2: {}", pt2(&input));
}

fn pt1(input: &str) -> i32 {
    let mut sum = 0;
    let mut rgb_max = HashMap::new();
    rgb_max.insert("r", 12);
    rgb_max.insert("g", 13);
    rgb_max.insert("b", 14);
    for (i, line) in input.lines().enumerate() {
        let mut line_split = line.split(":");
        let id:i32 = line_split.next().unwrap().replace(|c: char| !c.is_numeric(), "").to_string().parse().unwrap();
        let game = line_split.next().unwrap();
        let rounds: String = game
            .chars()
            .filter(|c| c.is_numeric() || c.is_whitespace())
            .collect();
        // .map(|s| s.trim().parse::<i32>().unwrap()).filter(|i| i > 12.borrow()).collect();
        let cube_colors: String = game
            .chars()
            .filter(|c| c.is_alphabetic() || c.is_whitespace())
            .collect();
        let color_map: Vec<&str> = cube_colors.trim().split_whitespace().collect();
        let imp_rounds = rounds
            .trim()
            .split_whitespace()
            .filter_map(|s| s.parse::<i32>().ok());
        for (map_index, cube) in imp_rounds.enumerate() {
            if cube > 12 {
                let color: String = color_map[map_index].chars().next().unwrap().to_string();
                if &cube < rgb_max.get_key_value(&color.trim()).unwrap().1 {
                    sum += id;
                }
                println!(
                    "{0} {1:?} {color}",
                    cube,
                    rgb_max.get_key_value(&color.trim()).unwrap()
                );
            } else {
            }
        }
    }
    sum.try_into().unwrap()
}
fn pt2(input: &str) -> i32 {
    let mut sum: i32 = 0;
    sum
}
