import { join } from 'node:path';
import { cwd } from 'node:process';
import { defineConfig, OptionsExport } from 'orval';
import { commonOverrides } from './overrides';

type Scope = {
  target: string;
  version: string;
};

const scopes: Scope[] = [
  {
    target: 'operations',
    version: 'v1',
  },
];

function makeBaseURL(target: string) {
  const base = process.env.VITE_API_DEFAULT_BASE_URL || 'http://localhost:3333';
  return `${base}/${target}`;
}

function makeConfig(scope: Scope): OptionsExport {
  return {
    input: {
      target: `apispecs/${scope.target}_${scope.version}.yaml`,
    },
    output: {
      target: join(
        cwd(),
        `generated/${scope.version}_${scope.target}.ts`
      ),
      baseUrl: makeBaseURL(scope.target),
      mode: 'split',
      client: 'react-query',
      mock: {
        type: 'msw',
        delay: 0,
        baseUrl: makeBaseURL(scope.target),
        useExamples: true,
      },
      override: {
        query: {
          useSuspenseQuery: true,
        },
        mock: {
          properties: commonOverrides,
        },
      },
    },
  };
}

const map = {};

scopes.forEach((scope) => {
  map[scope.target] = makeConfig(scope);
});

export default defineConfig(map);
