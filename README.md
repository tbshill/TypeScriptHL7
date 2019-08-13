# TypeScriptHL7

HL7 2.3 implementation in TypeScript.
- Parsing Segments and Datatypes
- Encoding Segments and Datatypes
- MLLP networking protocol

Because this is written in typescript there is wonderful auto-completion and intellisense. 


# Example - Parsing
```typescript

const test_MSH = "MSH|^~\&|INTELLIGO|MEDICALIS|COREPOINT|HL7|20190809063113||ORM^O01|558108|P|2.5||||||";
const msh = new MSH();
msh.fromString(test_MSH);

console.log(msh.toString());
>>> MSH|^~\&|INTELLIGO|MEDICALIS|COREPOINT|HL7|20190809063113||ORM^O01|558108|P|2.5||||||

console.log(msh.message_type.event.value);
>>> ORM

```

# Example - Encoding
```typescript

const test_MSH = "MSH|^~\&|INTELLIGO|MEDICALIS|COREPOINT|HL7|20190809063113||ORM^O01|558108|P|2.5||||||";
const msh = new MSH();
msh.fromString(test_MSH);

msh.message_type.event = "NEW EVENT"

console.log(msh.toString());
>>> MSH|^~\&|INTELLIGO|MEDICALIS|COREPOINT|HL7|20190809063113||NEW EVENT^O01|558108|P|2.5||||||
```
