use std::fs;

fn main() {
    let input = fs::read_to_string("C:/Users/150073110/Documents/GitHub/adventofcode/day_1/src/input.txt").expect("Could not locate file");
    let input2 = fs::read_to_string("C:/Users/150073110/Documents/GitHub/adventofcode/day_1/src/input2.txt").expect("Could not locate file");
    println!("Part 1: {}", pt1(&input));
    println!("Part 2: {}", pt2(&input2));
}

fn pt1(input:&String) -> i32{

    let mut sum: i32 = 0;
    for line in input.lines() {
        let clean_line = line
            .trim()
            .chars()
            .filter(|c| !c.is_alphabetic())
            .collect::<String>();
        let first = clean_line.chars().next().unwrap();
        let last  = clean_line.chars().next_back().unwrap_or(first);
        // println!("{0} | {1}{2}",line,first,last);
        let mut term = first.to_string();
        term.push(last);
        sum += term.parse::<i32>().unwrap();
    }
    sum
}


fn pt2(input:&String) -> i32{
    let num_to_let = ["zero","one","two","three","four","five","six","seven","eight","nine"];

    let sum: i32 = 0;
    for line in input.lines() {
        for (num,letter) in num_to_let.iter().enumerate(){
            println!("{}",letter);
            let mtch:Vec<&str> = line.matches(letter).collect();
            println!("{1}| {0:?} : {2}",mtch,line,num);
        }
    }
    sum
}