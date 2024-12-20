"use strict";
// // npm install  @grpc/grpc-js @frpc/proto-loader
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// //grpc -->> is another protocol like http which we use to create the application
// import path from 'path';
// import * as grpc from '@grpc/grpc-js';
// import { GrpcObject, ServiceClientConstructor } from "@grpc/grpc-js"
// import * as protoLoader from '@grpc/proto-loader';
// const packageDefinition = protoLoader.loadSync(path.join(__dirname, './a.proto'));
// const personProto = grpc.loadPackageDefinition(packageDefinition);
// const PERSONS = [
//     {
//         name: "harkirat",
//         age: 45
//     },
//     {
//         name: "raman",
//         age: 45
//     },
// ];
// //call>>req ans callback >> res.json
// //@ts-ignore
// function addPerson(call, callback) {
//     console.log(call)
//     let person = {
//         name: call.request.name,
//         age: call.request.age
//     }
//     PERSONS.push(person);
//     callback(null, person)
// }
// //we do not need to  write encode and decode of proto buff 
// //thsi is done by gprc underhood
// const server = new grpc.Server();
// server.addService((personProto.AddressBookService as ServiceClientConstructor).service, { addPerson: addPerson });
// server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
//     server.start();
// });
//using ht proto-loader to enhance the code
const path_1 = __importDefault(require("path"));
const grpc = __importStar(require("@grpc/grpc-js"));
const protoLoader = __importStar(require("@grpc/proto-loader"));
const constants_1 = require("@grpc/grpc-js/build/src/constants");
const packageDefinition = protoLoader.loadSync(path_1.default.join(__dirname, './a.proto'));
const personProto = grpc.loadPackageDefinition(packageDefinition);
const PERSONS = [
    {
        name: "harkirat",
        age: 45
    },
    {
        name: "raman",
        age: 45
    },
];
const handler = {
    AddPerson: (call, callback) => {
        let person = {
            name: call.request.name,
            age: call.request.age
        };
        PERSONS.push(person);
        callback(null, person);
    },
    GetPersonByName: (call, callback) => {
        let person = PERSONS.find(x => x.name === call.request.name);
        if (person) {
            callback(null, person);
        }
        else {
            callback({
                code: constants_1.Status.NOT_FOUND,
                details: "not found"
            }, null);
        }
    }
};
const server = new grpc.Server();
server.addService((personProto.AddressBookService).service, handler);
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});