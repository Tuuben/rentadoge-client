import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private apollo: Apollo) {}

  getUser() {
    return this.apollo.query<{ user: AppUser }>({
      query: gql`
        query UserQuery {
          user {
            id
            name
            bookedDog {
              id
              name
            }
          }
        }
      `,
      fetchPolicy: "network-only"
    });
  }

  createUser(data: any) {
    /* Pleb guard */
    delete data.email;
    delete data.password;

    return this.apollo
      .mutate<{ user: AppUser }>({
        mutation: gql`
          mutation UpdateUser($data: UserDataInput!) {
            updateUser(data: $data)
          }
        `,
        variables: { data }
      })
      .toPromise();
  }
}
