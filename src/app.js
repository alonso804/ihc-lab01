const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3000);

const teachers = [
  {
    id: 0,
    name: "Jesus Bellido",
    description:
      "Magister en Ciencia de la Computación y Doctor en Ciencia de la Computación por la Pontificia Universidad Católica de Chile reconocido con el premio al segundo lugar en el concurso de Tesis de Doctorado por el Centro Latinoamericano de Estudios en Informática (CLEI).",
    photo:
      "https://www.utec.edu.pe/sites/default/files/pictures/picture-809-1602864936.png",
    linkedin: "https://www.linkedin.com/in/jesubellido/",
    github: "https://github.com/jbellido19",
  },
  {
    id: 1,
    name: "Jose Fiestas",
    description:
      "Astrofísico computacional graduado en la Universidad de Heidelberg, Alemania. Experto en el desarrollo de modelos de alto rendimiento computacional, y de carácter interdisciplinario. Desarrollador de algoritmos para GPU, y sistemas híbridos.",
    photo:
      "https://www.utec.edu.pe/sites/default/files/pictures/picture-688-1507578478.png",
    linkedin: "https://www.linkedin.com/in/jose-fiestas-5268a330/",
    github: "https://github.com/fiestas",
  },
  {
    id: 2,
    name: "Jorge Gonzalez",
    description:
      "Ingeniero Electrónico graduado por la Universidad Privada Antenor Orrego en 2008. Maestría en el área de Microelectrónica por la Universidad de São Paulo en 2013. Doctorado en Ciencias de la Computación por la Universidad de Campinas en 2020.",
    photo:
      "https://www.utec.edu.pe/sites/default/files/pictures/picture-941-1602617091.png",
    linkedin: "https://www.linkedin.com/in/jorge-gonz%C3%A1lez-8aa721201/",
    github: "https://github.com/Jgonzalez1124",
  },
  {
    id: 3,
    name: "Teofilo Chambilla",
    description:
      "M.Sc en Ciencia de la Computación de la Universidad de Chile en el 2016, B.Sc en Ingeniería de Sistemas de la Universidad Privada de Tacna, Especialización en Analítica Big Data Science de DMC Perú.",
    photo:
      "https://www.utec.edu.pe/sites/default/files/pictures/picture-661-1620682095.png",
    linkedin: "https://www.linkedin.com/in/tchambil/",
    github: "https://github.com/Abhadd/Abhadd",
  },
  {
    id: 4,
    name: "Yamilet Serrano",
    description:
      "Doctora en Ciencia de Computación otorgado por el departamento de Ciencia de la Computación de la Universidad Nacional de Singapur (NUS). Primera peruana en obtener el grado de doctor en Computación en NUS.",
    photo:
      "https://www.utec.edu.pe/sites/default/files/pictures/picture-810-1603119747.png",
    linkedin: "https://www.linkedin.com/in/yamilet-serrano-llerena-71891591/",
    github: "https://github.com/yamileth2020",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World, this is UTEC API");
});

app.get("/teacher/:id", (req, res) => {
  const teacher = teachers.find(
    (teacher) => teacher.id === parseInt(req.params.id)
  );
  if (!teacher) {
    return res.status(404).send("The teacher with the given ID was not found.");
  }
  return res.status(201).json(teacher);
});

app.listen(app.get("port"), () => {
  console.log(`Listen on port ${app.get("port")}`);
});
