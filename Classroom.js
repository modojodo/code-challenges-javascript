function getStudents(classroom) {
  const { hasTeachingAssistant, classList } = classroom;
  let students;
  if (hasTeachingAssistant) {
    [, , ...students] = classList;
    return students;
  } else {
    [, ...students] = classList;
  }

  return students;
}

const students = getStudents({
  hasTeachingAssistant: false,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"]
})
console.log(students);