import fs from "fs";
import csvParse from "csv-parser";
import { ICategoryRepositoryInterface } from "../repository/repository-interface/categoriarepositori.interface.ts";

interface IImportCategory {
  nome: string;
  descricao: string;
};

export class UploadUseCase {
  constructor(private categoriaRepository: ICategoryRepositoryInterface) { };
  loadCategory(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const caregorys: IImportCategory[] = [];
      stream.pipe(csvParse())
        .on("data", async (data) => {
          console.log(data)
          const [nome, descricao] = data;
          caregorys.push(
            nome,
            descricao
          );
        })
        .on("end", () => {
          resolve(caregorys)
        })
        .on("erro", (err) => {
          reject(err);
        });
    });

  };
  async execult(file: Express.Multer.File): Promise<void> {
    const categorias = await this.loadCategory(file);

  categorias.map( async (category)=>{
    const { nome,  descricao} = category

    const existCategory = this.categoriaRepository.findByName(nome)

    if(!existCategory){
      this.categoriaRepository.creat({
        nome,
        descricao
      })
    }
    
  })
    console.log(categorias)
  };
}