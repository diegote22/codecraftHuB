const proyectos = [
  {
    titulo: "Curso de HTML 5",
    descripcion:
      "curso HTML 5 para principiante que quieran ingresar al mundo del front-end",
    link: "#",
    fecha: "01/12/2023",
    imagen: "Intro HTML y CSS.jpg",
    tecnologias: ["HTML 5",""],
  },
  {
    titulo: "Curso Front end con Angular",
    descripcion:
      "Curso que se compone de 8 horas de puro contenido separado en 17 videos en donde enseño como crear aplicaciones web utilizando Angular.",
    link: "#",
    fecha: "01/06/2023",
    imagen: "curso_angular_1.png",
    tecnologias: ["HTML","CSS","Javascript"],
  },

];

const informacionPersonal = {
  nombre: "Diego",
  subtitulo: "Desarrollador web",
  imagen: "img/CodeCraftHuB.png",
  otros: [
    ["CodeCraft HuB", "CodeCraft MedEdu", "CodeCraft CodeSchool"],
    [
      "Argentina",
      "Mendoza",
    ],
  ],
  idiomas: [
    ["Cursos", "Programación  Medicina"],
    ["Modalidad", "PDFs On-line"],
    ["Niveles", "Básico / PreUniversitario / Universitario"],
  ],
  tecnologias: [
    ["Html", 2],["Css", 1],["Javascript", 1],["Typescript", 0],["Angular", 1],
    ["Ionic",0],["Node",0],["Python",0],["C#",0]
  ],
  redes: [
    ["github", ""],
    ["linkedin", "https://www.linkedin.com/in/diego-carlos-godoy-torres-a73a991a4/"],
    ["youtube", ""],
    ["instagram", ""],
  ]
};

// Verifica si hay información en la ubicación antes de mostrarla
const ubicacion = informacionPersonal.otros[1].filter(Boolean).join(", ");

// Luego, puedes acceder a "ubicacion" para mostrarla
