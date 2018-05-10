function takeANumber(katz, name){
  katz.push(name)
  
  return `Welcome, ${name}. You are number ${katz.length} in line.`;
}


function takeANumber(katz){
  
}

// takeANumber(katz) => "Welcome. You're ticket number #1" [1]
// takeANumber(katz) => "Welcome. You're ticket number #2" [1,2]

// nowServing(katz) => "Currently serving: #1" [2]
// nowServing(katz) => "Currently serving: #2" []

// takeANumber(katz) => "Welcome. You're ticket number #3" [3]

function nowServing(katz){
  if (katz.length>0){
    console.log(`Currently serving`)
  }
}

function currentLine(katzDelLine){
  
}