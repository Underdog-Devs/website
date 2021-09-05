import React from 'react';
import { List } from 'antd';

export default function HiddenStats() {
  return (
    <div id="hiddenStats">
      <p>
        Incarceration rates in the U.S. began increasing dramatically in the
        1990s. The U.S. has the highest prison population of any country,
        comprising 25% of the world’s prisoners.{' '}
      </p>
      <p>
        <a
          href="https://www.prisonpolicy.org/research/recidivism_and_reentry/"
          rel="noreferrer"
          target="_blank"
        >
          recidivism and reentry on prisonpolicy.org
        </a>
      </p>
      <p>
        Out of a sample of 401,288 prisoners state prisoners released in 2005:
      </p>
      <p>
        <List bordered>
          <List.Item>
            68% of released prisoners were arrested within 3 years.
          </List.Item>
          <List.Item>
            79% of released prisoners were arrested within 6 years.
          </List.Item>
          <List.Item>
            83% of released prisoners were arrested within 9 years.
          </List.Item>
        </List>
      </p>
      <p>
        Using this study as a basepoint, one could state that the national
        recidivism rate is 83%.
      </p>
      <p>
        <a
          href="https://prisoninsight.com/recidivism-the-ultimate-guide/#tab-con-9"
          rel="noreferrer"
          target="_blank"
        >
          recidivism the ultimate guide on prisoninsight.com
        </a>
      </p>
    </div>
  );
}
