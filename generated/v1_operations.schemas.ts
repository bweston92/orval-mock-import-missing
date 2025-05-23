/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * Operations API
 * OpenAPI spec version: 1.0.0
 */
/**
 * The request message for [Operations.CancelOperation][google.longrunning.Operations.CancelOperation].
 */
export interface CancelOperationRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
}

/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export interface GoogleProtobufAny {
  /** The type of the serialized message. */
  '@type': string;
  [key: string]: unknown;
 }

/**
 * The response message for [Operations.ListOperations][google.longrunning.Operations.ListOperations].
 */
export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations: Operation[];
  /** The standard List next-page token. */
  nextPageToken: string;
}

/**
 * This resource represents a long-running operation that is the result of a
 network API call.
 */
export interface Operation {
  /** The server-assigned name, which is only unique within the same service that
 originally returns it. If you use the default HTTP mapping, the
 `name` should be a resource name ending with `operations/{unique_id}`. */
  name: string;
  /** Service-specific metadata associated with the operation.  It typically
 contains progress information and common metadata such as create time.
 Some services might not provide such metadata.  Any method that returns a
 long-running operation should document the metadata type, if any. */
  metadata: GoogleProtobufAny;
  /** If the value is `false`, it means the operation is still in progress.
 If `true`, the operation is completed, and either `error` or `response` is
 available. */
  done: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error: Status;
  /** The normal response of the operation in case of success.  If the original
 method returns no data on success, such as `Delete`, the response is
 `google.protobuf.Empty`.  If the original method is standard
 `Get`/`Create`/`Update`, the response should be the resource.  For other
 methods, the response should have the type `XxxResponse`, where `Xxx`
 is the original method name.  For example, if the original method name
 is `TakeSnapshot()`, the inferred response type is
 `TakeSnapshotResponse`. */
  response: GoogleProtobufAny;
}

/**
 * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
 */
export interface Status {
  /** The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code]. */
  code: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client. */
  message: string;
  /** A list of messages that carry the error details.  There is a common set of message types for APIs to use. */
  details: GoogleProtobufAny[];
}

export interface CosmicapisProtoEmpty {}

export type OperationsListOperationsParams = {
/**
 * The standard list filter.
 */
filter?: string;
/**
 * The standard list page size.
 */
pageSize?: number;
/**
 * The standard list page token.
 */
pageToken?: string;
};

