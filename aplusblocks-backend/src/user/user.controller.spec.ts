import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { async } from 'rxjs/internal/scheduler/async';


describe('User Controller', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a profile given an id-GET', async ()=>{
    let a = await controller.getProfile("id-2"); 
    expect(a).toBeDefined();
  });

  it("should fail with badinputexpection",async()=>{
    try{
    let a = await controller.getProfile("");
    } catch(error){
      let e = (error as Error).message;
      expect(e).toMatchObject({ error: "Bad Request", statusCode: 400 })
    }
  })

  it('should update a profile given an id',()=>{

  });

  it('should delete a profile given an id',()=>{

  });

  it('should create a proflie',()=>{

  });

  it('should handle http exception',  ()=>{

  });

  
});
