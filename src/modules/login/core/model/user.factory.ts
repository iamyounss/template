import { UserDomainModel } from "@/modules/login/core/model/user.domain-model";

export class UserFactory {
    static create(
      data?: Partial<UserDomainModel.User>
    ): UserDomainModel.User {
      return {
        userId: 123456789,
        email: "yahyayounss@hotmail.com",
        password: "1234567890",
        ...data,
      };
    }
  }
  